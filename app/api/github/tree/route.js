import {
  getGithubTree
} from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const tree = await getGithubTree();

    const folders = tree
      .filter((item) => item.type === "tree")
      .map((item) => ({
        type: "folder",
        path: item.path,
        name: item.path.split("/").pop()
      }));

    const files = tree
      .filter(
        (item) =>
          item.type === "blob" &&
          item.path.toLowerCase().endsWith(".md")
      )
      .map((item) => ({
        type: "file",
        path: item.path,
        name: item.path.split("/").pop().replace(/\.md$/i, "")
      }));

    return Response.json({
      success: true,
      folders,
      files
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