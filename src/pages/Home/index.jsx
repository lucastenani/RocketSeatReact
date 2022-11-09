import { Card } from "../../components/Card";
import "./style.css";

export function Home() {
  return (
    <div className="container">
      <h1>Attendance list</h1>
      <input type="text" placeholder="Enter a name..." />
      <button type="button">Add</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="Jones" time="11:00:10" />
    </div>
  );
}
