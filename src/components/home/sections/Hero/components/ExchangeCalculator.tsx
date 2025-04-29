"use client";
import { useState, useEffect } from 'react';
import { PE, US } from 'country-flag-icons/react/3x2';
import { AiOutlineTrophy } from "react-icons/ai";
import { MdSwapVert } from "react-icons/md";

// Exchange rates constants
const BUY_RATE = 3.6495;
const SELL_RATE = 3.6845;

type CurrencyOption = 'PEN' | 'USD';
type OperationType = 'BUY' | 'SELL';

const ExchangeCalculator = () => {
    const [operation, setOperation] = useState<OperationType>('SELL'); // Default to sell
    const [amount, setAmount] = useState(1000); // Default amount
    const [sendCurrency, setSendCurrency] = useState<CurrencyOption>('PEN');
    const [receiveCurrency, setReceiveCurrency] = useState<CurrencyOption>('USD');
    const [receiveAmount, setReceiveAmount] = useState(0);

    // Calculate exchange amount when any dependency changes
    useEffect(() => {
        const rate = operation === 'BUY' ? BUY_RATE : SELL_RATE;

        if (sendCurrency === 'PEN') {
            setReceiveAmount(Number((amount / rate).toFixed(2)));
        } else {
            setReceiveAmount(Number((amount * rate).toFixed(2)));
        }
    }, [amount, operation, sendCurrency]);

    // Handle operation type change
    const handleOperationChange = (newOperation: OperationType) => {
        setOperation(newOperation);
        setSendCurrency(receiveCurrency);
        setReceiveCurrency(sendCurrency);
    };

    const formatCurrency = (value: number, currency: CurrencyOption) => {
        const prefix = currency === 'PEN' ? 'S/. ' : '$ ';
        return `${prefix}${value.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const getCurrencySymbol = (currency: CurrencyOption) => {
        return currency === 'PEN' ? 'S/. ' : '$ ';
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9.]/g, '');
        if (value === '' || value === '.') {
            setAmount(0);
        } else {
            setAmount(parseFloat(value));
        }
    };

    const CurrencyFlag = ({ currency }: { currency: CurrencyOption }) => {
        return (
            <div className="w-6 h-4 overflow-hidden rounded">
                {currency === 'PEN' ?
                    <PE title="Peru" /> :
                    <US title="United States" />
                }
            </div>
        );
    };

    return (
        <div className="w-full max-w-md">
            {/* Main gradient container */}
            <div className="rounded-3xl bg-gradient-to-b from-[#091a5a] to-[#333f6d] p-4 text-white">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <AiOutlineTrophy size={22} />
                    <h2 className="text-center text-xs font-bold">
                        Cambia al instante con todos los bancos en Perú
                    </h2>
                </div>
                {/* White container */}
                <div className="rounded-2xl bg-white p-6 shadow-lg text-gray-800">
                    {/* Operation type selector */}
                    <div className="mb-6 flex w-full rounded-lg bg-[#e4e8f7] p-1">
                        <button
                            onClick={() => handleOperationChange('BUY')}
                            className={`flex-1 rounded-lg py-2 text-center text-sm font-bold transition-all ${operation === 'BUY'
                                ? 'bg-white text-[#0025b2]'
                                : 'text-gray-600'
                                }`}
                        >
                            Compra S/ {BUY_RATE.toFixed(4)}
                        </button>
                        <button
                            onClick={() => handleOperationChange('SELL')}
                            className={`flex-1 rounded-lg py-3 text-center text-sm font-bold transition-all ${operation === 'SELL'
                                ? 'bg-white text-[#0025b2]'
                                : 'text-gray-600'
                                }`}
                        >
                            Venta S/ {SELL_RATE.toFixed(4)}
                        </button>
                    </div>

                    {/* Currency inputs */}
                    <div className="space-y-4 relative">
                        {/* Send input */}
                        <div className="relative rounded-lg border border-[#0029b0] p-3">
                            <div className="mb-1 text-xs font-medium text-gray-500">Envía</div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <CurrencyFlag currency={sendCurrency} />
                                    <span className="font-bold text-gray-700">{sendCurrency}</span>
                                </div>
                                <div className="flex items-center justify-end w-2/3">
                                    <span className="text-xl font-bold text-gray-700 mr-1">{getCurrencySymbol(sendCurrency)}</span>
                                    <input
                                        type="text"
                                        value={amount}
                                        onChange={handleAmountChange}
                                        className="w-[1ch] min-w-[1ch] appearance-none border-none p-0 text-xl font-bold text-right focus:outline-none focus:ring-0"
                                        style={{
                                            width: `${String(amount).length}ch`,
                                            minWidth: String(amount).length ? `${String(amount).length}ch` : '1ch'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Swap Button */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 z-10" style={{ top: '50%', marginTop: '-20px' }}>
                            <button
                                onClick={() => handleOperationChange(operation === 'BUY' ? 'SELL' : 'BUY')}
                                className="h-10 w-10 rounded-full bg-[#0025b2] flex items-center justify-center shadow-md hover:bg-[#001d8f] transition-colors"
                            >
                                <MdSwapVert size={24} className="text-white" />
                            </button>
                        </div>

                        {/* Receive input */}
                        <div className="relative rounded-lg border border-[#0029b0] p-3">
                            <div className="mb-1 text-xs font-medium text-gray-500">Recibes</div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <CurrencyFlag currency={receiveCurrency} />
                                    <span className="font-bold text-gray-700">{receiveCurrency}</span>
                                </div>
                                <div className="text-xl font-bold text-gray-900 text-right">
                                    {formatCurrency(receiveAmount, receiveCurrency)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Register button */}
                    <button className="mt-6 w-full rounded-xl bg-[#0025b2] py-3 text-center text-white font-bold transition-colors hover:bg-[#001d8f]">
                        Regístrate
                    </button>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-2 text-center text-[10px] font-bold text-gray-600 px-4">
                (*)Cálculo respecto al tipo de cambio publicado por entidades bancarias.
            </div>
        </div>
    );
};

export default ExchangeCalculator;