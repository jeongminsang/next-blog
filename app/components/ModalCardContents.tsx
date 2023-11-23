"use client";

import { ContentsTitle, ContentsSubTitle, ProjectStack, StackTag, ProjectPeriod, LinkBtns, LinkBtn, GitHubIcn, LinkIcn } from '../styles/components/Modal';
import Carousel from './Carousel'

const ModalCardContents = (projectdata: any) => {
  const data = projectdata.projectdata.properties;

  const goGitHubHandle = () => {
    window.open(`${data.GitHub.rich_text[0].plain_text}`)
  }

  const goDeployLinkHandle = () => {
    window.open(`${data.Deploy.rich_text[0].plain_text}`)
  }

  return (
    <>
      <Carousel projectname={data.Images.rich_text} />
      <ContentsTitle>
        {data.Name.title[0].plain_text}
      </ContentsTitle>
      <ContentsSubTitle>
        {data.Description.rich_text[0].plain_text}
      </ContentsSubTitle>
      <ProjectStack>
        {data.Stack.multi_select.map((tag: any, index: number) => (
          <StackTag key={index}>{tag.name}</StackTag>
        ))}
      </ProjectStack>
      <ProjectPeriod>
        {data.WorkPeriod.date.start + " ~ " + data.WorkPeriod.date.end}
      </ProjectPeriod>
      <LinkBtns>
        <LinkBtn onClick={() => goGitHubHandle()}><GitHubIcn />GITHUB</LinkBtn>
        {data.Deploy.rich_text[0] &&
          <LinkBtn onClick={() => goDeployLinkHandle()}><LinkIcn />LINK</LinkBtn>
        }
      </LinkBtns>
    </>
  )
}

export default ModalCardContents;