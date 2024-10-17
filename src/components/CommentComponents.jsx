import React, { useState } from 'react';
import { Input, Button, List, Avatar, Rate, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const CommentSection = () => {
    const [comments, setComments] = useState([
        { text: 'This is a great recipe, thanks for sharing!', author: 'Pasya', rating: 4 },
        { text: 'I found this really helpful, keep it up!', author: 'Wildan', rating: 5 },
        { text: 'Can you elaborate more on this topic?', author: 'Naufal', rating: 3 },
    ]);

    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(0);

    const openNotificationWithIcon = (type, message, description) => {
        notification[type]({
            message: message,
            description: description,
        });
    };

    const addComment = () => {
        if (newComment.trim() && newRating > 0) {
            setComments([...comments, { text: newComment, author: localStorage.getItem('name') || 'User', rating: newRating }]);
            setNewComment(''); 
            setNewRating(0);   
        } else {
            openNotificationWithIcon('error', 'Submission Failed', 'Please add a comment and select a rating.');
        }
    };

    return (
        <div>
            <h2>Comments</h2>

            <Rate
                value={newRating}
                onChange={setNewRating}
                style={{ marginBottom: '10px' }}
            />

            <TextArea
                rows={4}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                style={{ marginBottom: '10px' }}
            />

            <Button type="primary" onClick={addComment} style={{ marginBottom: '20px' }}>
                Add Comment
            </Button>

            <List
                itemLayout="horizontal"
                dataSource={comments}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar icon={<UserOutlined />} />}
                            title={item.author}
                            description={item.text}
                        />  
                        <Rate disabled defaultValue={item.rating} />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CommentSection;
