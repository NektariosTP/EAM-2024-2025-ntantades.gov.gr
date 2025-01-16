import React, { useState } from "react";
import "./IstorikoGonewn_Anazhthsh.css";

export default function IstorikoGonewn_Anazhthsh({ messages, setFilteredMessages }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredMessages(messages);
    } else {
      const filtered = messages.filter((msg) => {
        // Ελέγχουμε εάν υπάρχουν πεδία για αναζήτηση
        const name = msg.name ? msg.name.toLowerCase() : "";
        const comment = msg.comment ? msg.comment.toLowerCase() : "";
        const message = msg.message ? msg.message.toLowerCase() : "";
        const nannyName = msg.nannyName ? msg.nannyName.toLowerCase() : "";
        const date = msg.date ? msg.date.toLowerCase(): "";
        const status = msg.status ? msg.status.toLowerCase(): "";
        const type = msg.type ? msg.type.toLowerCase(): "";
        const time = msg.time ? msg.time.toLowerCase(): "";
        const location = msg.location ? msg.location.toLowerCase(): "";
        const description = msg.description ? msg.description.toLowerCase(): "";
        const period = msg.period ? msg.period.toLowerCase(): "";
        const amount = msg.amount ? msg.amount.toLowerCase(): "";
        const rating = msg.rating ? msg.rating.toLowerCase(): "";

        return (
          name.includes(value) ||
          comment.includes(value) ||
          message.includes(value) ||
          nannyName.includes(value) ||
          date.includes(value) ||
          status.includes(value) ||
          type.includes(value) ||
          time.includes(value) ||
          location.includes(value) ||
          description.includes(value) ||
          period.includes(value) ||
          amount.includes(value) ||
          rating.includes(value)
        );
      });
      setFilteredMessages(filtered);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Αναζήτηση..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
