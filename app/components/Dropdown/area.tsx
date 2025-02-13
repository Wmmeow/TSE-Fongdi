// src/app/components/area.tsx
"use client";
import { JSX, useState } from "react";
import { mockLocations } from "@/app/data/Location/mockData";

interface Room {
  id: string;
  name: string;
  issues: string[];
}

interface Floor {
  id: string;
  name: string;
  rooms: Room[];
}

interface Zone {
  id: string;
  name: string;
  floors: Floor[];
}

export default function Area(): JSX.Element {
  const [selectedZone, setSelectedZone] = useState<string>("");
  const [selectedFloor, setSelectedFloor] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const [selectedIssue, setSelectedIssue] = useState<string>("");

  const zones: Zone[] = mockLocations;
  const floors: Floor[] =
    zones.find((zone) => zone.id === selectedZone)?.floors || [];
  const rooms: Room[] =
    floors.find((floor) => floor.id === selectedFloor)?.rooms || [];
  const issues: string[] =
    rooms.find((room) => room.id === selectedRoom)?.issues || [];

  return (
    <div>
      <label className="block text-[#8C181C] font-semibold">
        เลือกพื้นที่:
      </label>
      <select
        className="w-full p-2 border rounded text-black"
        value={selectedZone}
        onChange={(e) => {
          setSelectedZone(e.target.value);
          setSelectedFloor("");
          setSelectedRoom("");
          setSelectedIssue("");
        }}
      >
        <option value="">-- เลือกพื้นที่ --</option>
        {zones.map((zone) => (
          <option key={zone.id} value={zone.id}>
            {zone.name}
          </option>
        ))}
      </select>

      <label className="block text-red-800 font-semibold">เลือกชั้น:</label>
      <select
        className="w-full p-2 border rounded text-black"
        value={selectedFloor}
        onChange={(e) => {
          setSelectedFloor(e.target.value);
          setSelectedRoom("");
          setSelectedIssue("");
        }}
        disabled={!selectedZone}
      >
        <option value="">-- เลือกชั้น --</option>
        {floors.map((floor) => (
          <option key={floor.id} value={floor.id}>
            {floor.name}
          </option>
        ))}
      </select>

      <label className="block text-[#8C181C] font-semibold mt-3">
        เลือกห้อง:
      </label>
      <select
        className="w-full p-2 border rounded text-black"
        value={selectedRoom}
        onChange={(e) => {
          setSelectedRoom(e.target.value);
          setSelectedIssue("");
        }}
        disabled={!selectedFloor}
      >
        <option value="">-- เลือกห้อง --</option>
        {rooms.map((room) => (
          <option key={room.id} value={room.id}>
            {room.name}
          </option>
        ))}
      </select>

      <label className="block text-[#8C181C] font-semibold mt-3">
        เลือกประเภทปัญหา:
      </label>
      <select
        className="w-full p-2 border rounded text-black"
        value={selectedIssue}
        onChange={(e) => setSelectedIssue(e.target.value)}
        disabled={!selectedRoom}
      >
        <option value="">-- เลือกปัญหา --</option>
        {issues.map((issue, index) => (
          <option key={index} value={issue}>
            {issue}
          </option>
        ))}
      </select>

      <textarea
        className="w-full p-2 border rounded text-black mt-3 h-32"
        name="detail"
        id="detail"
        placeholder="รายละเอียดของปัญหา"
      />
    </div>
  );
}
