import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  ProjectType,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

export default {
  name: '@srclaunch/themes',
  description:
    'CSS variables and styled-component based themes used by SrcLaunch applications',
  type: ProjectType.Library,
  build: {
    bundle: {
      exclude: ['react', 'styled-components'],
      globals: {
        react: 'React',
        'styled-components': 'styled',
      },
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    platform: BuildPlatform.Node,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Jest,
  },
};
