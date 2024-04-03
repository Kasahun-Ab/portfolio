interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className=" flex items-start gap-4">
      <div
        
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <div className="w-full px-8 font-normal text-center !text-gray-500">
        {children}
      </div>
    </div>
  );
}

export default ResumeItem;
