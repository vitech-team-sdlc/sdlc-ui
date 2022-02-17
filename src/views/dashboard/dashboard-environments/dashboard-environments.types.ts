export interface ITemplate {
  name: string,
  environments: [
  {
    cluster: {
      name: string,
      nodeGroups: [
        {
          name: string,
          maxSize: number,
          minSize: number,
          spotSize: number,
          volumeSize: number,
          vmTypes: string[],
          labels: [
            {
              key: string,
              value: string
            }
          ],
          taints: [
            {
              key: string,
              value: string,
              effect: string
            }
          ],
          tags: [
            {
              key: string,
              value: string,
              propagateAtLaunch: boolean
            }
          ]
        },
        {
          name: string,
          maxSize: number,
          minSize: number,
          spotSize: number,
          volumeSize: number,
          vmTypes: string[]
        }
      ]
    },
    config: {
      key: string,
      remoteCluster: false,
      promotionStrategy: string
    }
  }
]
}
