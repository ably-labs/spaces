## Class Definitions

### Spaces

#### constructor(ably)

Create a new instance of the Spaces library.
This requires a promise instance of the Ably library to be passed in.
Refer to the [Ably-JS Documentation](https://github.com/ably/ably-js#introduction) for information on setting up a realtime promise client.

| Property | Type                 |
|----------|----------------------|
| ably     | Ably.RealtimePromise |


#### get(name, options?)
Get or create a space. Options may only be provided if a space does not yet exist.

| Property | Type                                           |
|----------|------------------------------------------------|
| name     | string                                         |
| options  | [SpaceOptions](#spaceoptions) &#124; undefined |

### SpaceOptions

### Space
An instance of a Space created using [spaces.get](#get--name-options-).

#### enter(profileData?)
Enter this space with optional profile data.
This data can be an arbitrary JSON-serializable object which will be attached to the member object and delivered to other members of the space.

| Property    | Type   |
|-------------|--------|
| profileData | Object |


#### leave()

Leave the space. This removes you from the space and notifies other space members.

#### on(event, callback)
`event` can be one of:

##### membersUpdate
Called when a member is updated, enters or leaves. This returns an array of [SpaceMember](#spacemember) objects.


### SpaceMember

A SpaceMember represents a member within a space.
This could be the local client or other remote clients which are connected to the same space.

| Property    | Type                              |
|-------------|-----------------------------------|
| clientId    | string                            |
| isConnected | bool                              |
| profileData | Object                            |
| lastEvent   | {name: string, timestamp: number} |