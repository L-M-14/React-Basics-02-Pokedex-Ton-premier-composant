// MyApp.tsx
import React from 'react';
import MyButton from './.components/MyTitle';

const MyApp: React.FC = () => {
    return (
        <div>
            <h1 className="title">Welcome to my app</h1>
            <MyButton />
        </div>
    );
};

export default MyApp;
