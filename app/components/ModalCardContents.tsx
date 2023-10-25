"use client";

import { ContentsTitle, ContentsSubTitle, ProjectStack, StackTag } from '../styles/components/Modal';
import Carousel from './Carousel'

const ModalCardContents = (projectdata: any) => {
  const data = projectdata.projectdata.properties;
  console.log(data.Files.files)

  const goGitHubHandle = () => {
    window.open(`${data.GitHub.rich_text[0].plain_text}`)
  }

  const goDeployLinkHandle = () => {
    window.open(`${data.Deploy.rich_text[0].plain_text}`)
  }

  return (
    <>
      <Carousel images={data.Files.files} />
      <ContentsTitle>
        {data.Name.title[0].plain_text}
      </ContentsTitle>
      <ContentsSubTitle>
        {data.Description.rich_text[0].plain_text}
      </ContentsSubTitle>
      <ProjectStack>
        {data.Stack.multi_select.map((tag: any) => (
          <StackTag>{tag.name}</StackTag>
        ))}
      </ProjectStack>
      <p>
        {data.WorkPeriod.date.start + "~" + data.WorkPeriod.date.end}
      </p>
      <button onClick={() => goGitHubHandle()}>GitHub</button>
      {data.Deploy.rich_text[0] &&
        <button onClick={() => goDeployLinkHandle()}>Link</button>
      }
    </>
  )
}

export default ModalCardContents;