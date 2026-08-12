export const site = {
  name: "九野",
  latinName: "9FIELD",
  description:
    "九野的品牌、产品与技术门户。我们在这里持续发布正在构建的项目、开放成果与思考。",
  corporateUrl: "https://9fields.cn/",
  publicGithubUrl: "https://github.com/9fields",
  internalGithubUrl: "https://github.com/JiuyeTongqu",
} as const;

export const directions = [
  {
    number: "01",
    title: "产品探索",
    description: "把复杂问题转化为清晰、可靠且有温度的数字体验。",
  },
  {
    number: "02",
    title: "开放技术",
    description: "分享可复用的工具、代码与实践，让协作发生得更自然。",
  },
  {
    number: "03",
    title: "长期思考",
    description: "记录技术、设计与现实世界之间值得持续讨论的连接。",
  },
] as const;

export const githubOrganizations = [
  {
    name: "9fields",
    description: "品牌、产品与开放项目",
    url: site.publicGithubUrl,
  },
  {
    name: "JiuyeTongqu",
    description: "公司与内部工程",
    url: site.internalGithubUrl,
  },
] as const;
