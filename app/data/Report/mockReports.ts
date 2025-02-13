// /app/data/Report/mockReports.ts

export const mockReports = [
    {
      id: "report1",
      reportNumber: "IS-10001", // เลขที่รายงาน
      reporter: "6500000000", // รหัสนักศึกษาของผู้แจ้ง
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
      ], // แนบรูปภาพ (สูงสุด 5 รูป)
      status: "รอดำเนินการ",
      createdAt: new Date().toISOString()
    },
    {
      id: "report2",
      reportNumber: "IS-10002", // เลขที่รายงาน
      reporter: "6500001234", // รหัสนักศึกษาของผู้แจ้ง
      title: "ต้นไม้ล้มขวางทางในลานจอดรถ",
      description: "ต้นไม้ล้มขวางทาง ทำให้รถไม่สามารถผ่านได้",
      location: {
        building: "ลานจอดรถวิศวะโยธา",
        floor: "ชั้น 1",
        room: "-" // ไม่มีหมายเลขห้อง เนื่องจากเป็นลานจอดรถ
      },
      images: [
        "https://example.com/parking_issue1.jpg",
        "https://example.com/parking_issue2.jpg"
      ], // รูปภาพที่เกี่ยวข้องกับปัญหา
      status: "รอดำเนินการ",
      createdAt: new Date().toISOString()
    }
  ];
  