import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Row,
  Col,
  Modal,
  Breadcrumb,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

import { useLocation, useNavigate } from 'react-router-dom';

const { Option } = Select;

const NutritionCalculator = () => {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [formData, setFormData] = useState(null);
  const [calories, setCalories] = useState(0);
  const [macronutrients, setMacronutrients] = useState({
    carbs: 0,
    protein: 0,
    fat: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showLoadingModal = () => {
    setIsModalOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const onFinish = (values) => {
    showLoadingModal();

    useEffect
    const { age, gender, height, weight, activityLevel } = values;
    let BMR = 0;
    if (gender === "male") {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
    };
    const totalCalories = BMR * activityMultiplier[activityLevel];

    setCalories(totalCalories);

    const carbs = (totalCalories * 0.5) / 4;
    const protein = (totalCalories * 0.2) / 4;
    const fat = (totalCalories * 0.3) / 9;
    setMacronutrients({ carbs, protein, fat });

    setFormData(values);
  };

  const pieData = {
    labels: ["Carbohydrates", "Protein", "Fat"],
    datasets: [
      {
        data: [
          macronutrients.carbs,
          macronutrients.protein,
          macronutrients.fat,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const barData = {
    labels: ["Total Calories"],
    datasets: [
      {
        label: "Daily Calories",
        data: [calories],
        backgroundColor: ["#36A2EB"],
      },
    ],
  };

  return (
    <div>
      <Navbar display={"true"} />
      <div className="container" style={{ marginTop: "100px" }}>
        <nav aria-label="breadcrumb mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a
                className="link-success cursor-pointer"
                onClick={() => nav("/")}
              >
                Home
              </a>
            </li>
           
            <li className="breadcrumb-item active" aria-current="page">
              Nutrition Calculator
            </li>
          </ol>
        </nav>

        <p className="text-success mb-0">EcoByte's</p>
        <h1>Nutrition Calculator</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please enter your age" }]}
          >
            <Input type="number" min={15} max={80} defaultValue={15} />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select your gender" }]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Height (cm)"
            name="height"
            rules={[{ required: true, message: "Please enter your height" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Weight (kg)"
            name="weight"
            rules={[{ required: true, message: "Please enter your weight" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Activity Level"
            name="activityLevel"
            rules={[
              { required: true, message: "Please select your activity level" },
            ]}
          >
            <Select placeholder="Select your activity level">
              <Option value="sedentary">Sedentary</Option>
              <Option value="light">Lightly active</Option>
              <Option value="moderate">Moderately active</Option>
              <Option value="active">Very active</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Calculate
            </Button>
          </Form.Item>
        </Form>

        <Modal
          title={<p>Nutrition Calculator</p>}
          footer={null}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
        >
          {loading ? (
            <div style={{ textAlign: "center" }}>
              <p>Loading...</p>
            </div>
          ) : (
            <div>
              <h3>Results</h3>
              <p>Daily Calories: {calories.toFixed(0)} kcal</p>
              <p>
                Carbohydrates: {macronutrients.carbs.toFixed(0)} grams per day
              </p>
              <p>Protein: {macronutrients.protein.toFixed(0)} grams per day</p>
              <p>Fat: {macronutrients.fat.toFixed(0)} grams per day</p>

              <Row gutter={16}>
                <Col span={12}>
                  <h4>Macronutrient Distribution</h4>
                  <Pie data={pieData} />
                </Col>
                {/* <Col span={12}>
                                    <h4>Daily Calorie Comparison</h4>
                                    <Bar data={barData} />
                                </Col> */}
              </Row>
            </div>
          )}
        </Modal>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default NutritionCalculator;
