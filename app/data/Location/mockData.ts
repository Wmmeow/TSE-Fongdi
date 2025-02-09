// src/app/data/mockData.ts
export const mockLocations = [
    {
      id: "zone1",
      name: "อาคาร A",
      floors: [
        {
          id: "floor1",
          name: "ชั้น 1",
          rooms: [
            { id: "room1", name: "ห้อง 101", issues: ["ไฟดับ", "น้ำรั่ว"] },
            { id: "room2", name: "ห้อง 102", issues: ["แอร์ไม่เย็น", "ประตูพัง"] },
          ],
        },
        {
          id: "floor2",
          name: "ชั้น 2",
          rooms: [
            { id: "room3", name: "ห้อง 201", issues: ["ท่อน้ำตัน", "ผนังร้าว"] },
          ],
        },
      ],
    },
    {
      id: "zone2",
      name: "อาคาร B",
      floors: [
        {
          id: "floor3",
          name: "ชั้น 1",
          rooms: [
            { id: "room4", name: "ห้อง 301", issues: ["ไฟกระพริบ", "พื้นลื่น"] },
          ],
        },
      ],
    },
  ];
  