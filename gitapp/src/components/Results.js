import React from 'react';
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';
const onResultStats = (results, time) => (
  <div className="flex justify-end">
    {results} results found in {time}ms
  </div>
);
const onData = (data) => (
  <div className="result-item" key={data.fullname}>
    {data.owner}/{data.name}
  </div>
);
const Results = () => (
  <div className="result-list">
    <SelectedFilters className="m1" />
    <ReactiveList
      componentId="results"
      dataField="name"
      onData={onData}
      onResultStats={onResultStats}
      react={{
        and: ['repo'],
      }}
      pagination
      innerClass={{
        list: 'result-list-container',
        pagination: 'result-list-pagination',
        resultsInfo: 'result-list-info',
        poweredBy: 'powered-by',
      }}
      size={6}
    />
  </div>
);
export default Results;
