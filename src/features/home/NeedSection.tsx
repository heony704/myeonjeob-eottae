function NeedSection() {
  return (
    <section className="flex justify-center bg-gray-100 py-20">
      <div className="flex flex-col gap-10 text-center text-black">
        <h2 className="text-3xl font-bold">면접, 준비가 결과를 만듭니다</h2>
        <p className="text-xl whitespace-pre-wrap">
          {`말이 너무 빠르진 않았나요?\n같은 표현을 반복하진 않았나요?\n표정이나 자세는 어색하진 않았나요?`}
        </p>
        <p className="text-xl font-bold whitespace-pre-wrap">{`내 모습을 직접 확인하는 것,\n그것이 가장 효과적인 면접 준비입니다.`}</p>
      </div>
    </section>
  );
}

export default NeedSection;
