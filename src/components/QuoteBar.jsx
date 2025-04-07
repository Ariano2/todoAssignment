import React, { useEffect, useState } from 'react';

const QuoteBar = () => {
  const [quote, setQuote] = useState('Lorem Ipsum Dolor Sit Amet');
  const [author, setAuthor] = useState('anonymous');
  useEffect(() => {
    const getQuote = async () => {
      try {
        const url = 'https://thequoteshub.com/api/';
        const response = await fetch(url, { method: 'GET' });
        console.log(response);
        const { author, text } = await response.json();
        console.log(author, text);
        setQuote(text);
        setAuthor(author);
      } catch (err) {
        console.log('failed');
      }
    };
    getQuote();
  }, []);
  return (
    <div className="navbar bg-base-100 shadow-sm flex flex-col">
      <q className=" text-md w-full my-2 text-center">{quote}</q>
      <address>~ {author}</address>
      <></>
    </div>
  );
};

export default QuoteBar;
