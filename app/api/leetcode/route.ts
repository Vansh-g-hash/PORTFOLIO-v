import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username') || '9iiNaN50z5'

  try {
    // Using LeetCode GraphQL API
    const response = await fetch('https://leetcode.com/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com/',
      },
      body: JSON.stringify({
        query: `
          query userSessionProgress($username: String!) {
            allQuestionsCount {
              difficulty
              count
            }
            matchedUser(username: $username) {
              username
              profile {
                ranking
                userAvatar
              }
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
                totalSubmissionNum {
                  difficulty
                  count
                }
              }
              badges {
                id
                displayName
              }
            }
          }
        `,
        variables: { username },
      }),
    })

    if (!response.ok) {
      throw new Error('LeetCode API error')
    }

    const data = await response.json()

    if (data.errors || !data.data?.matchedUser) {
      throw new Error('User not found')
    }

    const user = data.data.matchedUser
    const acStats = user.submitStats?.acSubmissionNum || []
    const totalStats = user.submitStats?.totalSubmissionNum || []

    const totalSolved = acStats.reduce((sum: number, stat: any) => sum + Number(stat.count), 0)
    const easySolved = Number(acStats.find((s: any) => s.difficulty === 'Easy')?.count ?? 0)
    const mediumSolved = Number(acStats.find((s: any) => s.difficulty === 'Medium')?.count ?? 0)
    const hardSolved = Number(acStats.find((s: any) => s.difficulty === 'Hard')?.count ?? 0)
    const totalSubmissions = totalStats.reduce((sum: number, stat: any) => sum + Number(stat.count), 0)

    return NextResponse.json({
      username, totalSolved, easySolved, mediumSolved, hardSolved,
      totalSubmissions,
      ranking: user.profile?.ranking,
      badges: Array.isArray(user.badges) ? user.badges.length : undefined,
    }, { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } })
  } catch (error) {
    console.error('[v0] LeetCode API error:', error)
    
    return NextResponse.json({ username, error: 'Stats temporarily unavailable' }, { status: 503 })
  }
}
