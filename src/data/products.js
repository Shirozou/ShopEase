const products = [
  {id:'p01',name:'Everyday Canvas Tote',price:34,category:'Accessories',description:'A reliable everyday carryall made with sturdy cotton canvas, generous straps, and a thoughtful inside pocket.',variants:['Natural','Olive','Charcoal'],stock:18,image:'/products/tote.svg',badge:'Bestseller'},
  {id:'p02',name:'Arc Table Lamp',price:89,category:'Home',description:'A softly sculpted bedside lamp that brings warmth and a little character to your favorite corner.',variants:['Cream','Olive'],stock:9,image:'/products/lamp.svg',badge:'New'},
  {id:'p03',name:'Studio Headphones',price:129,category:'Tech',description:'Over-ear headphones with soft cushions and a beautifully understated design for focused listening.',variants:['Stone','Black'],stock:13,image:'/products/headphones.svg'},
  {id:'p04',name:'Daily Ceramic Mug',price:28,category:'Home',description:'Hand-finished stoneware with a satisfying weight and a shape made for slow mornings.',variants:['Oat','Sage'],stock:31,image:'/products/mug.svg'},
  {id:'p05',name:'Field Notes Journal',price:24,category:'Lifestyle',description:'An uncluttered notebook for good ideas, quick sketches, and whatever comes next.',variants:['Moss','Sand'],stock:25,image:'/products/journal.svg'},
  {id:'p06',name:'Essential Water Bottle',price:39,category:'Lifestyle',description:'A reusable insulated water bottle with a leak-resistant lid and easy-to-hold silhouette.',variants:['Olive','Cream','Slate'],stock:24,image:'/products/bottle.svg'},
  {id:'p07',name:'Classic Sunglasses',price:68,category:'Accessories',description:'Everyday eyewear with a timeless frame and understated tinted lenses.',variants:['Tortoise','Black'],stock:11,image:'/products/sunglasses.svg'},
  {id:'p08',name:'Minimal Desk Clock',price:52,category:'Home',description:'A quiet desk companion with a clean dial and modern, pared-back proportions.',variants:['Ivory','Charcoal'],stock:16,image:'/products/clock.svg'},
  {id:'p09',name:'Everyday Sneakers',price:110,category:'Lifestyle',description:'Easygoing canvas sneakers designed for comfort, repeat wears, and a simple wardrobe.',variants:['Cream / 7','Cream / 8','Cream / 9','Cream / 10'],stock:12,image:'/products/shoes.svg'},
  {id:'p10',name:'Compact Bluetooth Speaker',price:79,category:'Tech',description:'A small, portable speaker with a rich sound and tactile, intuitive controls.',variants:['Forest','Sand'],stock:8,image:'/products/speaker.svg'},
  {id:'p11',name:'Modern Crossbody Bag',price:72,category:'Accessories',description:'A hands-free everyday bag with a comfortable strap and just enough room for essentials.',variants:['Tan','Olive'],stock:15,image:'/products/bag.svg'},
  {id:'p12',name:'Portable Desk Light',price:64,category:'Tech',description:'A compact task light with a flexible arm, ideal for reading, studying, or working late.',variants:['Cream','Graphite'],stock:0,image:'/products/desk-light.svg'},
];
export const categories = ['All','Home','Accessories','Tech','Lifestyle'];
export default products;
