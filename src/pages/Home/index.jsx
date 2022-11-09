import { Card } from "../../components/Card";
import "./style.css";

export function Home() {
  return (
    <div className="container">
      <h1>Attendance list</h1>
      <input type="text" placeholder="Enter a name..." />
      <button type="button">Add</button>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
