interface ICluster {
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
}

interface IClusterCreateTemplate extends ICluster {
  jxBotUsername: string,
  cloudProviderClientId: string,
  cloudProviderSecret: string,
  domainOwner: boolean,
  region: string,
}

interface IEnvironments {
  cluster: ICluster
  config: {
    key: string,
    remoteCluster: false,
    promotionStrategy: string
  }
}

export interface IEnvironmentsCreateTemplate extends IEnvironments {
  cluster: IClusterCreateTemplate
}

export interface ITemplate {
  name: string,
  environments: IEnvironments[]
}

export interface ITemplateCreate {
  name: string,
  cloudProvider: string,
  organization: string,
  ingressConfig: {
    domain: string,
    tls: {
      email: string
    }
  },
  environments: IEnvironmentsCreateTemplate[]
}

export interface IFormDataTemplateBased {
  awsKey: string,
  awsSecretKey: string,
  email: string
}
