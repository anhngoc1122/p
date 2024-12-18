import React from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import  styles from "../CSS/ProductDetail.module.css"
import { newBooks, bestSellers, Combo, Manga } from "../JS/testbook";

function ProductDetail(){
    const {id} = useParams();
    const allBooks = [...newBooks, ...bestSellers, ...Combo, ...Manga];
    const product = allBooks.find((book)=>book.title.trim()===id);
    if(!product) return (<div>Chưa có thông tin truyện</div>); 
    return (
        <div className={styles.product_detail}>
            <button className={clsx(styles.btn, styles.back)} 
                onClick={()=>window.history.back()}
            >
                <i class="fa-solid fa-arrow-left"></i>
            </button>
            <div className={styles.detail}>
                <div className={styles.container_img}>
                    <img 
                        className={clsx(styles.product_img, styles.img_mini)}
                        src={`/public/img/${product.img}`} 
                        alt={product.title}
                    />
                    <img 
                        className={clsx(styles.product_img, styles.img_big)}
                        src={`/public/img/${product.img}`} 
                        alt={product.title}
                    />
                </div>
                <div className={styles.container_content}>
                    <h2 className={styles.title}>
                        {product.title}
                    </h2>
                    <hr />
                    <p className={clsx(styles.price, styles.down)}>
                        {product.price}
                    </p>
                    {product.originalPrice && <s className={styles.price}>{product.originalPrice}</s>}
                    <hr />
                    <button className={clsx(styles.btn, styles.cart)}>Thêm vào giỏ hàng</button>
                    <button className={clsx(styles.btn, styles.buy)}>Mua Ngay</button>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;