import gsap from "gsap/all";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

const WorkList = styled.ul`
  margin-top: 320px;
  margin-left: 120px;
  overflow-x: hidden;
`;

const WorkListInner = styled.div`
  display: flex;
  transition: all 0.05s ease-in;
`;

const WorkListItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

const WorkImg = styled.img`
  width: 450px;
  height: 600px;
`;

const Work2 = () => {
  const WorkListRef = useRef<HTMLUListElement>(null);
  const WorkListInnerRef = useRef<HTMLDivElement>(null);
  const WorkListItemRef = useRef<HTMLLIElement>(null);

  const [workListCount, setWorkListCount] = useState(0);

  const tl = useMemo(
    () =>
      gsap.timeline({
        onStart: () => {
          console.log("tl start");
        }
      }),
    []
  );

  useEffect(() => {
    if (
      WorkListRef.current &&
      WorkListInnerRef.current &&
      WorkListItemRef.current
    ) {
      setWorkListCount(WorkListInnerRef.current.childNodes.length);
    }
  }, []);

  const slideAnimationToLeft = () => {
    if (
      WorkListRef.current &&
      WorkListItemRef.current &&
      WorkListInnerRef.current
    ) {
      if (workListCount >= WorkListInnerRef.current.childNodes.length) {
        tl.to(WorkListInnerRef.current, {
          x: "+=" + -(WorkListItemRef.current.offsetWidth + 50)
        });
        setWorkListCount(workListCount - 1);
      }
    }
  };
  const slideAnimationToRight = () => {
    if (
      WorkListRef.current &&
      WorkListItemRef.current &&
      WorkListInnerRef.current
    ) {
      if (workListCount < WorkListInnerRef.current.childNodes.length) {
        tl.to(WorkListInnerRef.current, {
          x: "+=" + (WorkListItemRef.current.offsetWidth + 50)
        });
        setWorkListCount(workListCount + 1);
      }
    }
  };

  return (
    <>
      <WorkList ref={WorkListRef}>
        <WorkListInner ref={WorkListInnerRef}>
          <WorkListItem ref={WorkListItemRef}>
            <WorkImg src="./public/img/work_1.png" />
            <p>로스트아크 캐릭터 검색 웹</p>
          </WorkListItem>
          <WorkListItem>
            <WorkImg src="./public/img/work_1.png" />
            <p>로스트아크 캐릭터 검색 웹</p>
          </WorkListItem>
          <WorkListItem>
            <WorkImg src="./public/img/work_1.png" />
            <p>로스트아크 캐릭터 검색 웹</p>
          </WorkListItem>
          <WorkListItem>
            <WorkImg src="./public/img/work_1.png" />
            <p>로스트아크 캐릭터 검색 웹</p>
          </WorkListItem>
        </WorkListInner>
      </WorkList>
      <button onClick={() => slideAnimationToLeft()}>왼쪽</button>
      <button onClick={() => slideAnimationToRight()}>오른쪽</button>
    </>
  );
};

export default Work2;
