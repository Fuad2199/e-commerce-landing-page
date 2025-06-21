// app/api/search/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('search');

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/public/products`,
      {
        params: { search: query },
      }
    );
    return NextResponse.json(res.data);
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error:', err.message);
    } else {
      console.error('An unknown error occurred.');
    }
    return NextResponse.json(
      { error: 'An error occurred during the search.' },
      { status: 500 }
    );
  }
}
