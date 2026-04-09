import React from 'react';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { SolutionsList as SolutionsListType } from '@/types/contentful';

interface SolutionsListProps {
  solutionsList: SolutionsListType;
}

export default function SolutionsList({ solutionsList: initialData }: SolutionsListProps) {
  const solutionsList = useContentfulLiveUpdates(initialData);
  const inspectorProps = useContentfulInspectorMode({ entryId: solutionsList.sys.id });

  const { title, subtitle, items } = solutionsList.fields;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12" {...inspectorProps({ fieldId: 'title' })}>
          <h2 className="text-3xl md:text-4xl font-bold text-ph-dark mb-4">
            {title}
          </h2>
          {subtitle && (
            <p 
              className="text-lg text-ph-slate max-w-3xl mx-auto"
              {...inspectorProps({ fieldId: 'subtitle' })}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          {...inspectorProps({ fieldId: 'items' })}
        >
          {items?.map((item, index) => (
            <div 
              key={item.sys.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {item.fields.number && (
                  <span className="text-4xl font-bold text-ph-red/60">
                    {item.fields.number}
                  </span>
                )}
                <div className="flex-1">
                  {item.fields.icon?.fields?.file?.url && (
                    <img
                      src={`https:${item.fields.icon.fields.file.url}`}
                      alt={item.fields.icon.fields.title || ''}
                      className="w-12 h-12 mb-4 object-contain"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-ph-dark mb-2">
                    {item.fields.title}
                  </h3>
                  {item.fields.description && (
                    <p className="text-ph-slate">
                      {item.fields.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
