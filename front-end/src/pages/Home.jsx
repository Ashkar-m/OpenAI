import React from 'react'

// add correct code for this portion
const Home = () => {
    const handleChat = async () => {
        if (!prompt.trim()) return;
    
        setLoading(true);
        setError("");
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/chat/", { prompt });
            setResponse(res.data.response);
        } catch (err) {
            setError("Error fetching response");
        }
        setLoading(false);
    };
    
  return (
    <div>
      
    </div>
  )
}

export default Home
