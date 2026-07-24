import { createContext, useEffect, useState, type ReactElement } from "react"

export type ProductType = {
    sku: string,
    name: string,
    price: number
}

//const initState: ProductType[] = []

const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]


export type UseProductsContextType = {
    products: ProductType[]
}

const initContextState: UseProductsContextType = { products: []}

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[]
}

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [productsToFetch, setProducts] = useState<ProductType[]>(initState)

    /*useEffect(() => {
        const fetchProducts = async(): Promise<ProductType[]> =>{
            const data = await fetch('http://localhost:3500/products').then(res => {
                return res.json()
            }).catch(err => {
                if(err instanceof Error) console.log(err.message)

            })
            return data
        }

        fetchProducts().then(productsToFetch => setProducts(productsToFetch))

    }, [])
*/

    /*
    const allProducts: UseProductsContextType = {
        products :[
            {
                "sku": "item0001",
                "name": "Widget",
                "price": 9.99
            }
        ]
    }
    */

    const allProducts: UseProductsContextType = {
        products: productsToFetch
    }

    return (
        //<ProductsContext.Provider value= {{products:products2}}>
            
        //</ProductsContext.Provider>
        <ProductsContext.Provider value= {allProducts}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductsContext
