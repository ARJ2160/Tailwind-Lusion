import React from 'react';

const ImageGrid = () => {
    return (
        <div className="image-grid h-fit p-20">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
                <div className="grid grid-cols-3 row-span-2 col-span-2">
                    <div>
                        <img src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/126092902_363731078221416_3923172392216927851_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=VwSGPbnNQGAAX8MrG2g&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-hP9I8sfvmyJaIt-t45jYTCoDKjhtYcy_tLzfyxOa-nQ&oe=61F4B525" alt="" />
                    </div>
                    <div>
                        <img src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/125805091_1244092065966946_7480077131728639836_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=eBHQvoSFpGgAX8Yjf6J&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-0MyJM5JbUbbGf2YFwzqkpG7Yqt6MLYr1i0ABdfa682Q&oe=61F3E562" alt="" />
                    </div>
                    <div>
                        <img src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/126106436_366020964688525_7792254897032838113_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=QHChXsTqFzEAX8bhxFQ&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-C1Rea0WJRy7f_vflwX22szOeo-Vgs7cZqRBSIuiHsow&oe=61F3BCAF  " alt="" />
                    </div>
                    <div>
                        <img src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/126398977_221851472632792_6291091317212891166_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=881UT48PxTAAX-oedUH&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9anUvGiM7ChEToyx04x_cA4c3Dugv1PHnGbI9oT4o3Pw&oe=61F454C2" alt="" />
                    </div>
                    <div>
                        <img src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/126197996_385197312744633_6397005439344767247_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_xJJd9RHkDoAX8JxNe8&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9YEWxB-oTjQgzlHC5hGo_RxH_c0Foxx731E2mrNSUALw&oe=61F55549" alt="" />
                    </div>
                    <div>
                        <img src="https://scontent-iad3-2.cdninstagram.com/v/t51.29350-15/125474066_691332491496782_8130376826513537460_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=EFDDTpNVInUAX_Ral1m&_nc_ht=scontent-iad3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-nJB3DGFPnSECme1a1C-valGjnB150SBWRPtVAr1F2iw&oe=61F3AD19" alt="" />
                    </div>
                </div>
                <div className="grids-text lg:row-span-2 lg:col-span-1 sm:col-span-2 col-span-2 flex flex-col justify-center sm:text-justify text-center">
                    <span className="lg:text-6xl sm:text-5xl text-3xl mb-10">Vintage Style</span>
                    <span className="lg:text-xl text-xl text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</span>
                    <span className="text-right text-3xl mt-10">___ #Lusiontheme</span>
                </div>
            </div>
            
        </div>
    )
};

export default ImageGrid;
