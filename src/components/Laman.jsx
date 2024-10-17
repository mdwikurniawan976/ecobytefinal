import React, { useEffect, useState } from 'react';
import { FoodData } from '../utility/FoodData';
import { useNavigate } from 'react-router-dom';
import { Pagination, Button } from 'antd'; 

const Laman = () => {
    const [first, setFirst] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [searchTerm, setSearchTerm] = useState('');
    const ITEMS_PER_PAGE = 4;

    const nav = useNavigate();

    useEffect(() => {
        setFirst(FoodData);
    }, []);

    // Filter the items based on search term
    const filteredItems = first.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Calculate the items to display for the current page
    const displayedItems = filteredItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    };

    return (
        <div className='py-3' id='recipe'>
            <div className="container text-center pt-5">
                <h1 className="text-center mb-3">Explore Our Menu's</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <div className="input-group mb-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Food's Name"
                                aria-label="Search Food"
                                aria-describedby="button-addon2"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <button className="btn btn-success" type="button" id="button-addon2" disabled>
                                &#128269;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center flex-row">
                    {
                        displayedItems.length > 0 ? displayedItems.map((item, index) => (
                            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-5">
                                <div className="card shadow-sm rounded-4 cursor-pointer hoverscale bg-light-subtle" style={{ minHeight: '386px' }} onClick={() => nav(`/recipe/${item.id}`)}>
                                    <img src={item.image[0]} className="card-img-top rounded-top-4" alt="..." style={{ maxHeight: '25vh', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <div className="d-flex justify-content-start">
                                            <h5 className="badge mb-2" style={{ backgroundColor: '#d1e7dd', color: '#198754' }}>Food</h5>
                                            <h5 className='badge bdgkal ms-1' style={{ backgroundColor: '#fcf2ec', color: '#feb791' }}>{item.kal} kcal</h5>
                                        </div>
                                        <h5 className="card-title text-start">{item.name.length > 30 ? `${item.name.slice(0, 30)}...` : item.name}</h5>
                                        <p className="card-text text-start">{item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description}</p>
                                        <div className="mb-auto">
                                            <p className='text-start text-success bdgkal'>View More..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <p>No results found for "{searchTerm}"</p>
                    }
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 2rem 0' }}>
                    <Button 
                        type="primary" 
                        onClick={() => nav('/recipe')} 
                        style={{ backgroundColor: '#28a745', borderColor: '#28a745', marginLeft: '20px' }} 
                    >
                        View More Recipes
                    </Button>
                    <Pagination
                        current={currentPage}
                        pageSize={ITEMS_PER_PAGE}
                        total={totalItems}
                        onChange={handlePageChange}
                        showSizeChanger={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Laman;
