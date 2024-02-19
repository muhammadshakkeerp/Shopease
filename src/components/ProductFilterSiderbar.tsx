import { ChangeEvent, useState } from 'react';
import { CiFilter } from 'react-icons/ci'
import { PiSortAscending } from 'react-icons/pi'


export const ProductFilterSiderbar = () => {
    const [price, setPrice] = useState<number>(50); // Initial price value

    const handlePriceChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPrice(parseInt(e.target.value));
    };
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    // Function to handle checkbox change
    const handleCheckboxChange = (brand: string) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((selected) => selected !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    // List of major brands
    const majorBrands = [
        'Apple',
        'Google',
        'Amazon',
        'Microsoft',
        'Samsung',
        'Tesla',
        'Facebook',
        'Nike',
        // Add more brands as needed
    ];

    const [selectedRating, setSelectedRating] = useState<number[]>([]);

    // Function to handle checkbox change
    const handleRatingChange = (rating:number) => {
        if (selectedRating.includes(rating)) {
            setSelectedRating(selectedRating.filter((selected) => selected !== rating));
        } else {
            setSelectedRating([rating]);
        }
    };

    // Array representing the available ratings
    const ratings = [
        { value: 1, label: '1 star' },
        { value: 2, label: '2 stars' },
        { value: 3, label: '3 stars' },
        { value: 4, label: '4 stars' },
        { value: 5, label: '5 stars' },
    ];
    return (
        <div className="w-full xl:w-1/5 ">
            {/* this style will be displayed untill screen size is 1270px */}
            <div className='flex justify-evenly xl:hidden'>
                <button className="flexCenter">Sort<PiSortAscending />
                </button>
                <hr className='h-[inherit] w-[2px] bg-lightGray' />
                <button className="flexCenter">Filter <CiFilter /></button>

            </div>

            {/* above xl devices */}
            <div className='hidden xl:block px-3 mt-2'>
                <h3>Filters</h3>

                <div className="relative mb-6">
                    <h4 className="px-2 py-1 text-center">PRICE</h4>
                    <input
                    title='Set Your Price Range'
                        type="range"
                        min="0"
                        max="100"
                        value={price}
                        onChange={handlePriceChange}
                        className="w-full h-2 bg-gray-300 appearance-none rounded-full slider-thumb:rounded-full focus:outline-none"
                    />
                    <span className="ml-4">{`$${price}`}</span>

                    <div className="flex  flex-col  gap-4">
                        <h4 className="px-2 py-1 text-center">BRAND</h4>
                        {majorBrands?.map((brand) => (
                            <label key={brand} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={brand}
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => handleCheckboxChange(brand)}
                                    className="mr-2"
                                />
                                {brand}
                            </label>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="px-2 py-1 text-center">CUSTOMER RATING</h4>
                        {ratings.map((rating) => (
                            <label key={rating.value} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={rating.value}
                                    checked={selectedRating.includes(rating.value)}
                                    onChange={() => handleRatingChange(rating.value)}
                                    className="mr-2"
                                />
                                {rating.label}
                            </label>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
