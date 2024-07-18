import React, { useState } from 'react'
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

const App: React.FC = () => {
  const [bookName, setBookName] = useState("");
  const [result, setResult] = useState("")
  const [error, setError] = useState<string | null>(null);

  // handle input change
  const handleBookNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookName(e.target.value);
  }

  const generateAnswer = async () => {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Generate the summary of the book that the user have entered. If you do not have find book simply display Sorry message. If you know some relatable book, you can say I have found this book and display the summary of that book. " },
        { role: "user", content: bookName }],
        model: "gpt-3.5-turbo",
      });
      console.log(completion);
      console.log(completion.choices[0]);
      setResult(completion.choices[0].message.content ?? "No content available.");
      setError(null); // Clear any previous errors
    } catch (err: any) {
      console.error(err);
      if (err.status === 429) {
        setError("You exceeded your current quota. Please check your plan and billing details.");
      } else {
        setError("An error occurred while generating the answer. Please try again later.");
      }
    }
  };
  return (
    <>
      <h1>Book Summary Generator</h1>
      <label htmlFor="book-name">Enter the book Name: </label>
      <input type="text" name='book-name' onChange={handleBookNameChange} value={bookName} />
      <button onClick={generateAnswer}>Generate</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>{result}</p>}
    </>
  )
}

export default App