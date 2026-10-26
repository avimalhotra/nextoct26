
/* using parameters */

import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { slug } = await params;
    console.log(slug);
    return NextResponse.json({ message: `User with ID ${slug} retrieved successfully` });
}