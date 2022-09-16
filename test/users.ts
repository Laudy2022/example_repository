interface User {
    firstName: string;
    lastName: string;
    age: number;
    sex: 'female' | 'male'; // the | symbol lets you separate as many values as you want
};


export default User;