import {
  getGithubMarkdownContent,
  isBlockedPath
} from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    if (!path) {
      return Response.json(
        {
          success: false,
          error: "File path is required."
        },
        {
          status: 400
        }
      );
    }

    if (isBlockedPath(path)) {
      return Response.json(
        {
          success: false,
          error: "This file is blocked."
        },
        {
          status: 403
        }
      );
    }

    if (!path.toLowerCase().endsWith(".md")) {
      return Response.json(
        {
          success: false,
          error: "Only Markdown files are allowed."
        },
        {
          status: 400
        }
      );
    }

    const content = await getGithubMarkdownContent(path);

    return Response.json({
      success: true,
      path,
      content
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message
      },
      {
        status: 500
      }
    );
  }
}