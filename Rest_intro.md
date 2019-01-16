# Restful

Representational State Transfer

#### Stateless Server

> Problem:
>
> > load from client increase ——  mix the server—— server do not have info between each other
>
> Solution:
>
> > all the information about the request stay in the request
>
> **the server do not store any request or the client info**

#### Caching

> Problem:
>
> > server send back data which is not changed often 
>
> Solution:
>
> > A server response should have information about how caching is to be done, so that a client caches the response for a time-period or never caches the server response.

#### Uniform Interface

> **all of the stuff in restful web is noun**
>
> Resources (n)
>
> > Ex: book. Https:// ..//book
> >
> > Customer  https://..//custormer