import { NextResponse } from "next/server";

export async function GET() {
  const sampleData = [
    {
      id: 1,
      name: "평균 월 120만원",
      description: "임금을 해당 국가를 기준으로 계산합니다.",
    },
    {
      id: 2,
      name: "최대 3회 인력교체",
      description: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
    },
    {
      id: 3,
      name: "평균 3일, 최대 10일",
      description: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
    },
  ];
  return NextResponse.json(sampleData, { status: 200 });
}
