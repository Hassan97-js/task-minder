import db from "./db";

export async function getTasks(userId?: string) {
  if (userId) {
    return await db.task.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }
}
