import {createContext,useContext,useEffect,useMemo,useState} from 'react';
import {useStore} from './StoreContext';
const CartContext=createContext(null);
const KEY='shopease-cart-v1';
function loadCart(products){try{const saved=JSON.parse(localStorage.getItem(KEY)||'[]');if(!Array.isArray(saved))return [];return saved.filter(i=>products.some(p=>p.id===i.id&&p.variants.includes(i.variant)&&p.stock>0)&&Number.isInteger(i.quantity)&&i.quantity>0).map(i=>({...i,quantity:Math.min(i.quantity,products.find(p=>p.id===i.id).stock)}));}catch{return [];}}
export function CartProvider({children}){
 const {products}=useStore();
 const [items,setItems]=useState(()=>loadCart(products));
 const [notice,setNotice]=useState('');
 useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(items));}catch{/* Storage may be unavailable */}},[items]);
 useEffect(()=>{setItems(prev=>prev.filter(i=>products.some(p=>p.id===i.id&&p.stock>0&&p.variants.includes(i.variant))).map(i=>({...i,quantity:Math.min(i.quantity,products.find(p=>p.id===i.id).stock)})))},[products]);
 const addItem=(product,variant,quantity=1)=>{if(product.stock<=0)return;setItems(prev=>{const key=i=>i.id===product.id&&i.variant===variant;const existing=prev.find(key);const otherVariantCount=prev.filter(i=>i.id===product.id&&!key(i)).reduce((n,i)=>n+i.quantity,0);const available=Math.max(0,product.stock-otherVariantCount);if(existing)return prev.map(i=>key(i)?{...i,quantity:Math.min(available,i.quantity+quantity)}:i);if(available<=0)return prev;return [...prev,{id:product.id,variant,quantity:Math.min(available,Math.max(1,quantity))}];});setNotice(`${product.name} added to cart`);};
 const updateQuantity=(id,variant,quantity)=>setItems(prev=>prev.map(i=>{if(i.id!==id||i.variant!==variant)return i;const product=products.find(p=>p.id===id);const reserved=prev.filter(other=>other.id===id&&other.variant!==variant).reduce((n,o)=>n+o.quantity,0);return {...i,quantity:Math.min(Math.max(1,quantity),product.stock-reserved)};}).filter(i=>i.quantity>0));
 const removeItem=(id,variant)=>setItems(prev=>prev.filter(i=>!(i.id===id&&i.variant===variant)));
 const clearCart=()=>setItems([]);
 const detailedItems=useMemo(()=>items.map(i=>({...i,product:products.find(p=>p.id===i.id)})).filter(i=>i.product),[items]);
 const count=items.reduce((n,i)=>n+i.quantity,0);
 const subtotal=detailedItems.reduce((n,i)=>n+i.product.price*i.quantity,0);
 return <CartContext.Provider value={{items,detailedItems,count,subtotal,addItem,updateQuantity,removeItem,clearCart,notice,setNotice}}>{children}</CartContext.Provider>;
}
export function useCart(){const value=useContext(CartContext);if(!value)throw Error('useCart must be inside CartProvider');return value;}
