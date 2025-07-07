import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Use the environment variable key that matches what you provided
    const apiKey = process.env.newsdata_api_key

    if (!apiKey) {
      console.error("News API key not found in environment variables")
      return NextResponse.json({
        results: getMockNews(),
        totalResults: 8,
        status: "mock_data",
        error: "API key not configured",
      })
    }

    // Simplified and more reliable parameters
    const params = new URLSearchParams({
      apikey: apiKey,
      country: "in",
      category: "business",
      language: "en",
      size: "10", // Reduced size to avoid rate limits
    })

    console.log("Fetching news with simplified parameters...")

    const response = await fetch(`https://newsdata.io/api/1/news?${params}`, {
      headers: {
        Accept: "application/json",
        "User-Agent": "SmartInvest/1.0",
      },
      next: { revalidate: 600 }, // Cache for 10 minutes
    })

    if (!response.ok) {
      console.error(`News API error: ${response.status} - ${response.statusText}`)
      const errorText = await response.text()
      console.error("Error response:", errorText)

      return NextResponse.json({
        results: getMockNews(),
        totalResults: 8,
        status: "mock_data",
        error: `API error: ${response.status}`,
      })
    }

    const data = await response.json()
    console.log("News API response:", data.status, "Results:", data.results?.length || 0)

    return NextResponse.json({
      results: data.results || getMockNews(),
      totalResults: data.totalResults || 0,
      status: "success",
    })
  } catch (error) {
    console.error("Error fetching news:", error)

    return NextResponse.json({
      results: getMockNews(),
      totalResults: 8,
      status: "mock_data",
      error: "Network error",
    })
  }
}

function getMockNews() {
  return [
    {
      title: "Indian Stock Market Shows Strong Performance Amid Global Uncertainty",
      description:
        "The BSE Sensex and NSE Nifty indices have shown resilience despite global market volatility, with banking and IT sectors leading the gains. Market experts suggest that domestic factors are supporting the upward momentum.",
      link: "https://economictimes.indiatimes.com/markets/stocks/news",
      pubDate: new Date().toISOString(),
      source_id: "economictimes",
      category: ["business"],
    },
    {
      title: "RBI Monetary Policy Decision Expected to Impact Market Sentiment",
      description:
        "Investors are closely watching the Reserve Bank of India's upcoming monetary policy announcement for signals on interest rate direction. The decision could significantly influence market trends in the coming weeks.",
      link: "https://www.moneycontrol.com/news/business/markets/",
      pubDate: new Date(Date.now() - 3600000).toISOString(),
      source_id: "moneycontrol",
      category: ["business"],
    },
    {
      title: "IT Sector Stocks Rally on Strong Q3 Earnings Outlook",
      description:
        "Major IT companies like TCS, Infosys, and Wipro are seeing increased investor interest ahead of their quarterly earnings announcements. The sector is expected to benefit from continued digital transformation trends.",
      link: "https://www.business-standard.com/markets/news",
      pubDate: new Date(Date.now() - 7200000).toISOString(),
      source_id: "business-standard",
      category: ["business"],
    },
    {
      title: "Banking Stocks Surge on Improved Credit Growth Prospects",
      description:
        "HDFC Bank, ICICI Bank, and SBI shares have gained momentum as analysts project better credit growth in the upcoming quarters. The banking sector is showing signs of recovery from previous challenges.",
      link: "https://www.livemint.com/market/stock-market-news",
      pubDate: new Date(Date.now() - 10800000).toISOString(),
      source_id: "livemint",
      category: ["business"],
    },
    {
      title: "Foreign Institutional Investors Show Renewed Interest in Indian Markets",
      description:
        "FII inflows have picked up pace in recent weeks, with international investors showing confidence in India's economic growth story. This trend is providing additional support to market indices.",
      link: "https://www.financialexpress.com/market/",
      pubDate: new Date(Date.now() - 14400000).toISOString(),
      source_id: "financialexpress",
      category: ["business"],
    },
    {
      title: "Reliance Industries Reports Strong Quarterly Results",
      description:
        "Reliance Industries has posted impressive quarterly earnings, driven by strong performance in its petrochemicals and retail segments. The company's digital initiatives continue to show promising growth.",
      link: "https://economictimes.indiatimes.com/markets/stocks/earnings",
      pubDate: new Date(Date.now() - 18000000).toISOString(),
      source_id: "economictimes",
      category: ["business"],
    },
    {
      title: "TCS Announces Major Digital Transformation Deal",
      description:
        "Tata Consultancy Services has secured a multi-billion dollar digital transformation contract with a global client. This deal is expected to boost the company's revenue growth in the coming quarters.",
      link: "https://www.moneycontrol.com/news/business/earnings/",
      pubDate: new Date(Date.now() - 21600000).toISOString(),
      source_id: "moneycontrol",
      category: ["business"],
    },
    {
      title: "HDFC Bank Expands Digital Banking Services",
      description:
        "HDFC Bank has launched new digital banking services to enhance customer experience and compete with fintech companies. The bank's digital strategy is showing positive results in customer acquisition.",
      link: "https://www.business-standard.com/companies/news",
      pubDate: new Date(Date.now() - 25200000).toISOString(),
      source_id: "business-standard",
      category: ["business"],
    },
  ]
}
