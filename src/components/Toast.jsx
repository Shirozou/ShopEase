import {useEffect} from 'react';
import {CheckCircle2,X} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useCart} from '../context/CartContext';
export default function Toast(){const {notice,setNotice}=useCart();useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>setNotice(''),3500);return ()=>clearTimeout(timer)},[notice,setNotice]);if(!notice)return null;return <div role="status" className="fixed z-50 bottom-5 right-5 left-5 sm:left-auto sm:w-[360px] rounded-md bg-ink text-white shadow-xl p-4 flex items-start gap-3"><CheckCircle2 className="text-[#d5e3cb] shrink-0" size={20}/><div className="flex-1"><p className="text-sm font-semibold">{notice}</p><Link to="/cart" onClick={()=>setNotice('')} className="underline underline-offset-4 text-xs text-[#d5e3cb] mt-1 block">View cart</Link></div><button aria-label="Dismiss notification" onClick={()=>setNotice('')}><X size={17}/></button></div>}
