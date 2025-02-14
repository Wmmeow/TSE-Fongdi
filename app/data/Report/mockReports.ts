export const mockReports = [
    {
      id: "report1",
      reportNumber: "IS-10001", 
      reporter: "6500000000", 
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
      ], 
      status: "รอดำเนินการ",
      createdAt: new Date().toISOString()
    },
    {
      id: "report2",
      reportNumber: "IS-10002", 
      reporter: "6500001234", 
      title: "ต้นไม้ล้มขวางทางในลานจอดรถ",
      description: "ต้นไม้ล้มขวางทางโดนรถผม ขยับรถไม่ได้ครับ",
      location: {
        building: "ลานจอดรถวิศวะโยธา",
        floor: "ชั้น 1",
        room: "-" 
      },
      images: [
        "/ต้นไม้ล้ม1.jpeg",
        "/ต้นไม้ล้ม2.jpeg"
      ], 
      status: "รอดำเนินการ",
      createdAt: new Date().toISOString()
    }
  ];
  