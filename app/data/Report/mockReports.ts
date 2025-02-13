export const mockReports = [
    {
      id: "report1",
      reporter: "6500000000", 
      name: "Supisara Chaiwang",
      title: "ไฟไม่ติดในห้องเรียน",
      description: "ไฟในห้องเรียนดับทั้งหมด ทำให้มองไม่เห็นตอนเรียน",
      location: {
        building: "อาคาร A",
        floor: "ชั้น 2",
        room: "ห้อง 201"
      },
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
      ], // สามารถเก็บได้สูงสุด 5 รูป
      status: "รอดำเนินการ", // สถานะของการแจ้งปัญหา
      createdAt: new Date().toISOString() // วันที่แจ้งปัญหา
    }
  ];
  