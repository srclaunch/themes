import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  ProjectType,
} from '@srclaunch/types';

export default {
  name: '@srclaunch/themes',
  description:
    'CSS variables and styled-component based themes used by SrcLaunch applications.',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    platform: BuildPlatform.Browser,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
};
