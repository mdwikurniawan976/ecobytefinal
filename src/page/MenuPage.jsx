import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, Rate, Badge, Button, Skeleton } from 'antd';
import { FoodData } from '../utility/FoodData';
import { useNavigate, useParams } from 'react-router-dom';
import imageContent2 from '../assets/content2.png';

const { Meta } = Card;

const MenuPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All'); // State untuk kategori
  const nav = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const filter = queryParams.get('filter');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      setData(FoodData);
      setLoading(false);
    }, 1500);

    if (filter) {
      handleCategoryClick(filter);
    }
  }, [filter]); 

  const handleCategoryClick = async (category) => {
    setLoading(true);
    setSelectedCategory(category);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
  };

  // Filter data berdasarkan kategori
  const filteredData = selectedCategory === 'All'
    ? data
    : data?.filter(item => item.category.includes(selectedCategory.toLowerCase()));

  return (
    <div>
      <Navbar display={'true'} />

      <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
        <p className="text-success text-center mb-0">EcoByte's Recipe's</p>
        <h2 className="text-center mb-4">Waste-Free Meals with Calorie Breakdown</h2>

        <div className="row d-flex justify-content-center mb-5">
          <Button
            className="col-3 col-md-1 mx-1"
            style={{ backgroundColor: selectedCategory === 'All' ? '#fa8c16' : '#f0f0f0', borderColor: '#fa8c16', color: selectedCategory === 'All' ? '#fff' : '#000' }}
            onClick={() => handleCategoryClick('All')}
          >
            All
          </Button>
          <Button
            className="col-3 col-md-1 mx-1 grey-button"
            type="default"
            style={{ backgroundColor: selectedCategory === 'vegetable' ? '#fa8c16' : '#f0f0f0', borderColor: '#fa8c16', color: selectedCategory === 'vegetable' ? '#fff' : '#000' }}
            onClick={() => handleCategoryClick('vegetable')}
          >
            Vegetarian
          </Button>
          <Button
            className="col-3 col-md-1 mx-1 grey-button"
            type="default"
            style={{ backgroundColor: selectedCategory === 'breakfast' ? '#fa8c16' : '#f0f0f0', borderColor: '#fa8c16', color: selectedCategory === 'breakfast' ? '#fff' : '#000' }}
            onClick={() => handleCategoryClick('breakfast')}
          >
            Breakfast
          </Button>
          <Button
            className="col-3 col-md-1 mx-1 grey-button mt-3 mt-md-0"
            type="default"
            style={{ backgroundColor: selectedCategory === 'snack' ? '#fa8c16' : '#f0f0f0', borderColor: '#fa8c16', color: selectedCategory === 'snack' ? '#fff' : '#000' }}
            onClick={() => handleCategoryClick('snack')}
          >
            Snacks
          </Button>
          <Button
            className="col-3 col-md-1 mx-1 grey-button mt-3 mt-md-0"
            type="default"
            style={{ backgroundColor: selectedCategory === 'desert' ? '#fa8c16' : '#f0f0f0', borderColor: '#fa8c16', color: selectedCategory === 'desert' ? '#fff' : '#000' }}
            onClick={() => handleCategoryClick('desert')}
          >
            Desserts
          </Button>
        </div>

        <div className="row mt-4 d-flex justify-content-center">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div className="col-md-4" key={index}>
                <Card style={{ width: 300, marginBottom: '2rem' }}>
                  <Skeleton.Image style={{ width: 300, height: 200 }} />
                  <Skeleton active paragraph={{ rows: 2 }} />
                </Card>
              </div>
            ))
          ) : (
            filteredData &&
            filteredData.map((item, index) => {
              const fixedRating = [4.5, 2.5, 3, 4, 3.5, 5][Math.floor(Math.random() * 6)];
              return (
                <div
                  className="col-md-4 col-sm-12 d-flex justify-content-center"
                  key={index}
                  onClick={() => nav(`/recipe/${item.id}`)}
                >
                  <Badge
                    count={`${item.kal} kcal`}
                    style={{ backgroundColor: '#fa8c16' }}
                    offset={[0, 0]}
                  >
                    <Card
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src={item.image[0]}
                          style={{ maxHeight: '25vh', objectFit: 'cover' }}
                        />
                      }
                      style={{ width: 300, marginBottom: '2rem' }}
                    >
                      <Meta title={item.name} description={item.description.length > 70 ? item.description.substring(0, 70) + '...' : item.description} />
                      <Rate
                        allowHalf
                        value={fixedRating}
                        disabled
                        style={{ marginTop: '10px' }}
                      />
                    </Card>
                  </Badge>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="container" style={{ marginBottom: '100px' }}>
        <Card>
          <div className="container py-3">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <img className='w-100 mb-3 no-select' src={imageContent2} alt="lorem" style={{ filter: 'drop-shadow(8px 8px 16px rgba(0, 0, 0, 0.3))' }} />
              </div>
              <div className="col-sm-12 col-md-7 align-self-center">
                <p className="text-success">Community</p>
                <h3 className='mb-4'>Share Your Creative Leftover Recipes </h3>
                <p>Leverage the power of social media to inspire others by sharing your innovative recipes made from leftover ingredients. Encourage users to showcase how they transform food scraps into delicious, eco-friendly meals. Strengthen our community’s commitment to reducing food waste through engaging, user-driven content.</p>
                <Button type="primary" onClick={() => nav('/recipe/create')}>Share Recipe</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
