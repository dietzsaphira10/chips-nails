import { useState } from "react";

const AdminJournal = () => {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    const newPost = { image: imgUrl, date: date };
    const existing = JSON.parse(localStorage.getItem("journal-posts") || "[]");
    const updated = [newPost, ...existing];
    localStorage.setItem("journal-posts", JSON.stringify(updated));
    alert("Bild zum Journal hinzugefügt!");
    setImgUrl("");
  };

  if (!isAuth) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <input 
          type="password" 
          placeholder="Passwort eingeben..." 
          className="bg-white/10 p-4 rounded border border-white/20"
          onChange={(e) => e.target.value === "deinpw123" && setIsAuth(true)} 
        />
      </div>
    );
  }

  return (
    <div className="p-20 max-w-xl mx-auto font-montserrat">
      <h2 className="text-2xl mb-10">Neuer Journal Eintrag</h2>
      <input className="w-full p-4 mb-4 border" placeholder="Bild-URL (z.B. /assets/...) " value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
      <input className="w-full p-4 mb-10 border" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleAdd} className="w-full bg-black text-white py-4">POSTEN</button>
    </div>
  );
};

export default AdminJournal;