import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  const sampleData = [
    {
      id: 1,
      name: "Abhishek Gupta",
      image: "https://i.ibb.co.com/1sbnRJ7/Group-5094.png",
      experience: "2y+",
      title: "마케팅",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      id: 2,
      name: "Sushant Kumar",
      image: "https://i.ibb.co.com/1sbnRJ7/Group-5094.png",
      experience: "2y+",
      title: "마케팅",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      id: 3,
      name: "Sushant Kumar",
      image: "https://i.ibb.co.com/1sbnRJ7/Group-5094.png",
      experience: "1y+",
      title: "마케팅",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
  ];
  return NextResponse.json(sampleData, { status: 200 });
}
