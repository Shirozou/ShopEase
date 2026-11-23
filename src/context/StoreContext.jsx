import {createContext,useContext,useEffect,useMemo,useState} from 'react';
import seedProducts from '../data/products';
const StoreContext=createContext(null);
const PRODUCT_KEY='shopease-products-v1', ORDER_KEY='shopease-orders-v1';
function read(key,fallback){try{const data=JSON.parse(localStorage.getItem(key));return Array.isArray(data)?data:fallback}catch{return fallback}}
export function StoreProvider({children}){
 const [products,setProducts]=useState(()=>read(PRODUCT_KEY,seedProducts));
 const [orders,setOrders]=useState(()=>read(ORDER_KEY,[]));
 useEffect(()=>{try{localStorage.setItem(PRODUCT_KEY,JSON.stringify(products))}catch{}},[products]);
 useEffect(()=>{try{localStorage.setItem(ORDER_KEY,JSON.stringify(orders))}catch{}},[orders]);
 useEffect(()=>{
   const sync=(event)=>{
     if(event.key===PRODUCT_KEY) setProducts(read(PRODUCT_KEY,seedProducts));
     if(event.key===ORDER_KEY) setOrders(read(ORDER_KEY,[]));
   };
   window.addEventListener('storage',sync);
   return ()=>window.removeEventListener('storage',sync);
 },[]);
 const saveProduct=(product)=>setProducts(current=>current.some(p=>p.id===product.id)?current.map(p=>p.id===product.id?product:p):[product,...current]);
 const deleteProduct=(id)=>setProducts(current=>current.filter(p=>p.id!==id));
 const addOrder=(order)=>setOrders(current=>[order,...current]);
 const updateOrderStatus=(number,status)=>setOrders(current=>current.map(o=>o.number===number?{...o,status}:o));
 const resetDemo=()=>{setProducts(seedProducts);setOrders([])};
 const value=useMemo(()=>({products,orders,saveProduct,deleteProduct,addOrder,updateOrderStatus,resetDemo}),[products,orders]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export function useStore(){const ctx=useContext(StoreContext);if(!ctx)throw Error('StoreProvider is required');return ctx}
