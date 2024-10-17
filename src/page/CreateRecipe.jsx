import React, { useEffect } from 'react';
import { InboxOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import { Card, Flex, Input, message, Upload, Form, Button, InputNumber, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};

const CreateRecipe = () => {
    const { pathname } = useLocation();

    const nav = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // user upload image
    const { Dragger } = Upload;
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } 
            else if (status === 'error') {
                message.error(`${info.file.name} file not uploaded.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form:', values);
        notification.open({
            message: 'Coming Soon!',
            description: 'Your recipe submission feature is coming soon. Stay tuned!',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    const showNotification = () => {
        notification.open({
            message: 'Coming Soon!',
            description: 'Your recipe submission feature is coming soon. Stay tuned!',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <div>
            <Navbar display={'true'} />
            <div className="container px-5" style={{ marginTop: '100px', marginBottom: '100px' }}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className='link-success cursor-pointer' onClick={() => nav('/')}>Home</a></li>
                        <li className="breadcrumb-item" aria-current="page"><a className='link-success cursor-pointer' onClick={() => nav('/recipe')}>Recipe</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Create recipe</li>
                    </ol>
                </nav>
                <Card>
                    <Flex vertical gap={32}>
                        <div>
                            <p className="text-success mb-0">EcoByte's</p>
                            <h2>Create Our Recipe</h2>
                            <p className="">Share Your Creative Leftover Recipes</p>
                        </div>

                        <div className="">
                            <h5>Title</h5>
                            <Input placeholder="Insert Title" showCount maxLength={30} onChange={onChange} />
                        </div>
                        <div className="">
                            <h5>Description</h5>
                            <TextArea showCount maxLength={300} onChange={onChange} placeholder="Insert Food Descriptions" style={{ height: 120 }} />
                        </div>

                        <div>
                            <h5 className="">Ingredients</h5>
                            <Form
                                name="dynamic_form_item"
                                {...formItemLayoutWithOutLabel}
                                onFinish={onFinish}
                                style={{ marginLeft: '0' }}
                            >
                                <Form.List
                                    name="names"
                                    rules={[
                                        {
                                            validator: async (_, names) => {
                                                if (!names || names.length < 1) {
                                                    return Promise.reject(new Error('At least 2 Ingredients required!'));
                                                }
                                            },
                                        },
                                    ]}
                                >
                                    {(fields, { add, remove }, { errors }) => (
                                        <>
                                            {fields.map((field, index) => (
                                                <Form.Item
                                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                    label={index === 0 ? 'Insert Food Ingredients' : ''}
                                                    required={false}
                                                    key={field.key}
                                                >
                                                    <Form.Item
                                                        {...field}
                                                        validateTrigger={['onChange', 'onBlur']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                whitespace: true,
                                                                message: "Please input Ingredient or delete this field.",
                                                            },
                                                        ]}
                                                        noStyle
                                                    >
                                                        <Flex gap={10}>
                                                            <InputNumber style={{
                                                                width: '60%',
                                                            }}
                                                                min={1} max={30} defaultValue={1}
                                                            />
                                                            <Input
                                                                placeholder="unit of measure"
                                                                defaultValue='spoon'
                                                                style={{
                                                                    width: '60%',
                                                                }}
                                                            />
                                                            <Input
                                                                placeholder="ingredient name"
                                                                style={{
                                                                    width: '60%',
                                                                }}
                                                            />
                                                            <InputNumber
                                                                defaultValue={0}
                                                                min={0}
                                                                max={1000}
                                                                formatter={(val) => `${val} kcal`}
                                                                parser={(val) => val?.replace(' kcal', '')}
                                                                style={{
                                                                    width: '60%',
                                                                }}
                                                            />
                                                            {fields.length > 1 ? (
                                                                <MinusCircleOutlined
                                                                    className="dynamic-delete-button "
                                                                    onClick={() => remove(field.name)}
                                                                />
                                                            ) : null}
                                                        </Flex>
                                                    </Form.Item>
                                                </Form.Item>
                                            ))}
                                            <Form.Item>
                                                <Button
                                                    type="dashed"
                                                    onClick={() => add()}
                                                    style={{
                                                        width: '60%',
                                                    }}
                                                    icon={<PlusOutlined />}
                                                >
                                                    Add field
                                                </Button>
                                                <Form.ErrorList errors={errors} />
                                            </Form.Item>
                                        </>
                                    )}
                                </Form.List>
                            </Form>
                        </div>

                        <div>
                            <h5 className="">How To Make</h5>
                            <TextArea showCount maxLength={100} onChange={onChange} placeholder="Step by Step (parsing with dot)" style={{ height: 120 }} />
                        </div>

                        <div>
                            <h5 className="">Upload Image</h5>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                    banned files.
                                </p>
                            </Dragger>
                        </div>

                    </Flex>

                    <button className="btn btn-primary rounded-3 mt-5 float-end" onClick={showNotification}>Submit</button>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default CreateRecipe;
