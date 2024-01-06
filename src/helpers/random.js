const getRandomNumber = (limit) => {
    //? 0 ===> 0.99999999999 * 126 ==> 0 =====>125.99999999 ==> 0 ==> 125 ==> 1 ==> 126
    return Math.floor(Math.random() * limit) + 1;
};

export { getRandomNumber };